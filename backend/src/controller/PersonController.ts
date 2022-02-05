import {
  Body,
  Get,
  JsonController,
  Param,
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

  @Get("/:id")
  async getPersonById(@Param("id") id: string): Promise<Person> {
    return this.personService.getPersonById(id);
  }

  @Post("/")
  @UseBefore(PersonMiddleware)
  async insertPerson(
    @Body({ validate: true }) person: Person
  ): Promise<Person> {
    return this.personService.insertPerson(person);
  }
}
