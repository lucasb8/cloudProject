import {
  Body,
  Delete,
  Get,
  JsonController,
  Post,
  UseBefore,
} from "routing-controllers";
import { Inject } from "typedi";
import { Person } from "../entity/Person";
import { PersonMiddleware } from "../middleware/custom/PersonMiddleware";
import { PersonService } from "../service/PersonService";

@JsonController("/person")
export class PersonController {
  @Inject()
  personService: PersonService;

  @Get("/")
  async getAllPerson(): Promise<Person[]> {
    return this.personService.getAllPerson();
  }

  @Post("/")
  @UseBefore(PersonMiddleware)
  async insertPerson(
    @Body({ validate: true }) person: Person
  ): Promise<Person> {
    return this.personService.insertPerson(person);
  }

  @Delete("/")
  async deleteAllPerson(): Promise<string> {
    await this.personService.deleteAllPerson();
    return "";
  }
}
