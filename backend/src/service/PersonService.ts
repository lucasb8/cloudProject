import { Inject, Service } from "typedi";

import { Person } from "../entity/Person";
import { PersonRepository } from "../repository/PersonRepository";

@Service()
export class PersonService {
  @Inject()
  PersonRepository: PersonRepository;

  async getAllPerson(): Promise<Person[]> {
    return this.PersonRepository.getAllPerson();
  }

  async getPersonById(id: string): Promise<Person> {
    return this.PersonRepository.getPersonById(id);
  }

  async insertPerson(person: Person): Promise<Person> {
    return this.PersonRepository.insertPerson(person);
  }
}
