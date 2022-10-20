type Params = {
    id: string;
    code: string; name: string;
    created_at: Date;
}

export class PartnerSaveCommand {
    id: string;
    code: string; name: string;
    created_at: Date;

    constructor({ id, code, name, created_at }: Params) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.created_at = created_at;
    }
}