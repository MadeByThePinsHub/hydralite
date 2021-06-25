import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateNestedManyWithoutRolesInput } from "../inputs/ProjectMemberCreateNestedManyWithoutRolesInput";
import { ProjectRoleCreatelinkedOpenEndedTasksInput } from "../inputs/ProjectRoleCreatelinkedOpenEndedTasksInput";
import { ProjectRolePermissionsCreateNestedOneWithoutProjectRoleInput } from "../inputs/ProjectRolePermissionsCreateNestedOneWithoutProjectRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => ProjectRoleCreatelinkedOpenEndedTasksInput, {
    nullable: true
  })
  linkedOpenEndedTasks?: ProjectRoleCreatelinkedOpenEndedTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateNestedManyWithoutRolesInput, {
    nullable: true
  })
  assignedMembers?: ProjectMemberCreateNestedManyWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateNestedOneWithoutProjectRoleInput, {
    nullable: false
  })
  permissions!: ProjectRolePermissionsCreateNestedOneWithoutProjectRoleInput;
}
