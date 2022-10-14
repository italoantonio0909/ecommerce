import { FirebaseRepository } from "../../Shared/infrastructure/persistence/firebase/FirebaseRepository";
import { Partner } from "../domain/Partner";
import { PartnerRepository } from "../domain/PartnerRepository";

export class PartnerWebApiClient extends FirebaseRepository<Partner> implements PartnerRepository {

  async save(partner: Partner): Promise<void> {
    await this.persist(partner);
  }

  moduleName(): string {
    return 'partner';
  }

  orderBy(): string {
    return 'created_at';
  }

}
