import { CompilerConfig } from '@ton-community/blueprint';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { compile as compileFunc } from '@ton-community/blueprint';



export const compile: CompilerConfig = {
    lang: 'func',
    preCompileHook: async () => {
        await compileFunc('JettonWallet');
    },
    targets: [ 'contracts/auto/jetton-wallet-code.func',
               'contracts/jetton-minter.func'],
};
