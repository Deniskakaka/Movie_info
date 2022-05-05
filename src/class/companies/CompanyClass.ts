import { IProductionCompany } from "Root/interfaces/interfaceGlobalObject/globalObjectsInterfaces";

class ProductionCompany implements IProductionCompany {
    id: number;
    name: string;
    logo_path: string;

    constructor(id: number, name: string, logo_path: string) {
        this.id = id,
            this.name = name,
            this.logo_path = logo_path
    }
};

export default ProductionCompany;