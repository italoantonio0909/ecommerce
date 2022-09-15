import { BackofficePartnerRepository } from '../../domain/BackofficePartnerRepository';
import { BackofficePartner } from '../../domain/BackofficePartner';
import firestore from '../../../../../../apps/Sales/database';

export class BackofficePartnerWebApiClient implements BackofficePartnerRepository {

  constructor() { }

  async create(category: BackofficePartner): Promise<BackofficePartner> {
    const ref = firestore.collection('partners').doc();

    const { writeTime } = await ref.create(category);

    if (writeTime) {
      return category as BackofficePartner
    }
  }

}
