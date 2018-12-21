const glob = require('glob');
export class SourceFiles{
    public readonly glob: string;
    public readonly filePaths: string[];
    /**
     * Source option
     * @param filesGlob A glob that matches the files where to look for
     */
    constructor(filesGlob: string) {
        this.glob = filesGlob;
        this.filePaths = glob.sync(filesGlob);
    }
}