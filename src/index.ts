import { SourceFiles } from "./command-opts/source-files";
import commandLineArgs, { OptionDefinition } from 'command-line-args';

const optionDefinitions: OptionDefinition[] = [
    {
        name: 'source',
        type: (fileGlob: string) => new SourceFiles(fileGlob),
        alias: 's',
    },
];

const {source} = commandLineArgs(optionDefinitions);
const toObj = () => {
    console.log(source.filePaths);
};

export default toObj;