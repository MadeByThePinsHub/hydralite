import * as TypeGraphQL from "type-graphql";

export enum ProjectRoleScalarFieldEnum {
  id = "id",
  title = "title",
  linkedOpenEndedTasks = "linkedOpenEndedTasks",
  permissionsId = "permissionsId",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(ProjectRoleScalarFieldEnum, {
  name: "ProjectRoleScalarFieldEnum",
  description: undefined,
});
