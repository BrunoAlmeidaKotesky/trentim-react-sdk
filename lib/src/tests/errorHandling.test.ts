import { describe, it, expect } from 'vitest';
import { Catch, DefaultCatch, defaultCatch, Err, Ok, Handler } from '@helpers/errorHandling';
import type { Result } from '@models/index';

class InvalidInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidInputError';
    }
}

class DatabaseConnectionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseConnectionError';
    }
}

class AuthorizationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AuthorizationError';
    }
}

type UserData = { name: string, age: number };
class UserService {

    @DefaultCatch(() => "An unexpected error occurred")
    @Catch(InvalidInputError, () => "Invalid input provided")
    @Catch(DatabaseConnectionError, () => "Failed to connect to the database")
    @Catch(AuthorizationError, () => "User is not authorized")
    public getUserProfile(userId: string, authToken: string, forceError = false): string {
        if (forceError)
            throw new Error('An unexpected error occurred');
        // Simulate checking for invalid input
        if (!userId)
            throw new InvalidInputError('User ID is required');
        // Simulate checking for authorization
        if (!authToken || authToken !== 'valid-token')
            throw new AuthorizationError('Unauthorized access');
        // Simulate database connection
        const dbConnection = this.connectToDatabase();
        if (!dbConnection)
            throw new DatabaseConnectionError('Database connection failed');
        // Simulate fetching user profile
        const userProfile = dbConnection.getUserProfile(userId);
        return userProfile;
    }

    public connectToDatabase() {
        // Simulate logic to connect to the database
        // Return null if connection fails
        return {
            getUserProfile: (userId: string) => `Profile of user ${userId}`
        };
    }

    /**We could have some real fetch logic to get the users from the database, it might fail. */
    @DefaultCatch((err) => { console.error(err); return Err('Failed to get the users') })
    public async getUsers(forceError = false): Promise<Result<UserData[], string>> {
        if (forceError) throw new Error('An unexpected error occurred');
        /**const users = await getUserFromDataBase(); */
        const users: UserData[] = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
        return Ok(users);
    }

}

describe('Test UserService', () => {
    const userService = new UserService();
    it('Should handle InvalidInputError', () => {
        expect(userService.getUserProfile('', 'valid-token')).toBe('Invalid input provided');
    });

    it('Should handle AuthorizationError', () => {
        expect(userService.getUserProfile('123', 'invalid-token')).toBe('User is not authorized');
    });

    it('Should return user profile for valid input', () => {
        expect(userService.getUserProfile('123', 'valid-token')).toBe('Profile of user 123');
    });

    it('Should handle DatabaseConnectionError', () => {
        // Modify connectToDatabase to return null to simulate a database connection failure
        userService.connectToDatabase = () => null;
        expect(userService.getUserProfile('123', 'valid-token')).toBe('Failed to connect to the database');
    });

    it('Should return default error message for unexpected error', () => {
        expect(userService.getUserProfile('123', 'valid-token', true)).toBe('An unexpected error occurred');
    })
});

describe('Test errors with Result<T,E>', () => {
    const userService = new UserService();
    it('Should log error and return error message', async () => {
        const result = await userService.getUsers(true);
        expect(result.type).toBe('error');
        expect(result.isErr()).toBe(true);
        expect(
            result.unwrapOrElse((err) => {
                expect(err).toBe('Failed to get the users');
                return [];
            })
        ).toHaveLength(0);
    });
    it('Should return users', async () => {
        const result = await userService.getUsers();
        expect(result.type).toBe('ok');
        expect(result.isOk()).toBe(true);
        expect(result.unwrap()).toEqual([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
    });
});

describe('Test HOF defaultCatch', () => {
    type SomethingRes = Promise<Result<string, string>>;
    const defaultHandler: Handler = (err, _ctx, arg) => {
        console.error(err);
        return Err(`Failed to get ${arg}`)
    }

    const getSomething = defaultCatch(async (value: string, forceFail = false): SomethingRes => {
        if (forceFail) throw new Error('Forced error.');
        return Ok(value);
    }, defaultHandler);

    it('Should return Ok', async () => {
        const result = await getSomething('something');
        expect(result.type).toBe('ok');
        expect(result.isOk()).toBe(true);
        expect(result.unwrap()).toBe('something');
    });

    it('Should return Err', async () => {
        const result = await getSomething('something', true);
        expect(result.type).toBe('error');
        expect(result.isErr()).toBe(true);
    })
});