import { Service } from "typedi";
import { getMongoRepository } from "typeorm";

import { Person } from "../entity/Person";

@Service()
export class PersonRepository {
  async getAllPerson(): Promise<Person[]> {
    return getMongoRepository(Person).find();
  }

  async getPersonById(id: string): Promise<Person> {
    return getMongoRepository(Person).findOne(id);
  }

  async insertPerson(person: Person): Promise<Person> {
    return getMongoRepository(Person).save(person);
  }
}
