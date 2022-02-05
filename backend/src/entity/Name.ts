import { IsString, MinLength } from "class-validator";
import { Column } from "typeorm";

export class Name {
  @Column()
  @MinLength(4, { message: "Minimum length should be 4" })
  @IsString({ message: "Only String value is allowed" })
  firstName: string;

  @Column()
  @IsString({ message: "Only String value is allowed" })
  lastName: string;
}
