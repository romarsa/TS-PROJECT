import { CipherImpl } from "./CipherDecipher";
export class CipherLeftShift extends CipherImpl {
    //TODO
    //deciphering right shift ' ' + shift
    //ciphering left shift '~' - shift
    constructor(shift: number) {
        super(shift, true);
    }
}