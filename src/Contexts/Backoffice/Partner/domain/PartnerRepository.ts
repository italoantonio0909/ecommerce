import { Partner } from "./Partner";

export interface PartnerRepository {
    create(partner: Partner): Promise<Partner>;
}