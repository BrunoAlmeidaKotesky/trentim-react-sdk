
export const beforeWriteFile = (path: string, content: string) => {
    console.log(path);
    const folderReg = /(\/models|\/helpers|\/hooks|\/decorators|\/components)/g;
    let filePath = path.replace('/src/', '/').replace(folderReg, '');
    console.log(filePath);
    return {filePath, content};
}