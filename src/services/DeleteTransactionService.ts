import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transaciotnRepository = getCustomRepository(TransactionRepository);

    const transaction = await transaciotnRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transaciotnRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
