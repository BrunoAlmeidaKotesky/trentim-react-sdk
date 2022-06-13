import { IPlugin, PluginStore } from "react-pluggable";

export class FetchPlugin implements IPlugin {
    namespace = "Auth";

    pluginStore!: PluginStore;

    getPluginName(): string {
        return "Auth@1.0.0";
    }
    getDependencies(): string[] {
        return [];
    }

    init(pluginStore: PluginStore): void {
        this.pluginStore = pluginStore;
    }

    activate(): void {
        this.pluginStore.addFunction('fetch', () => {
            console.log("Fetching...");
        });
    }

    deactivate(): void {}
}