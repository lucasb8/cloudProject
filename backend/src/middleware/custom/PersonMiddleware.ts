import { plainToClass } from "class-transformer";
import { ExpressMiddlewareInterface } from "routing-controllers";

import { Person } from "../../entity/Person";
import { validateEntity } from "../../util/validator";

export class PersonMiddleware implements ExpressMiddlewareInterface {
  async use(request: any, _: unknown, next?: (err?: any) => any): Promise<any> {
    let person = plainToClass(Person, request.body);
    let validationErrors = await validateEntity(person);
    if (validationErrors.length > 0) {
      throw {
        thrown: true,
        message: "Invalid data",
        errors: validationErrors,
      };
    } else {
      next();
    }
  }
}
