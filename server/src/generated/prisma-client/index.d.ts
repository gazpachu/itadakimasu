// Code generated by Prisma (prisma@1.22.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  date: (where?: DateWhereInput) => Promise<boolean>;
  event: (where?: EventWhereInput) => Promise<boolean>;
  place: (where?: PlaceWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  date: (where: DateWhereUniqueInput) => DatePromise;
  dates: (
    args?: {
      where?: DateWhereInput;
      orderBy?: DateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Date>;
  datesConnection: (
    args?: {
      where?: DateWhereInput;
      orderBy?: DateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => DateConnectionPromise;
  event: (where: EventWhereUniqueInput) => EventPromise;
  events: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Event>;
  eventsConnection: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => EventConnectionPromise;
  place: (where: PlaceWhereUniqueInput) => PlacePromise;
  places: (
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Place>;
  placesConnection: (
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PlaceConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createDate: (data: DateCreateInput) => DatePromise;
  updateDate: (
    args: { data: DateUpdateInput; where: DateWhereUniqueInput }
  ) => DatePromise;
  updateManyDates: (
    args: { data: DateUpdateManyMutationInput; where?: DateWhereInput }
  ) => BatchPayloadPromise;
  upsertDate: (
    args: {
      where: DateWhereUniqueInput;
      create: DateCreateInput;
      update: DateUpdateInput;
    }
  ) => DatePromise;
  deleteDate: (where: DateWhereUniqueInput) => DatePromise;
  deleteManyDates: (where?: DateWhereInput) => BatchPayloadPromise;
  createEvent: (data: EventCreateInput) => EventPromise;
  updateEvent: (
    args: { data: EventUpdateInput; where: EventWhereUniqueInput }
  ) => EventPromise;
  updateManyEvents: (
    args: { data: EventUpdateManyMutationInput; where?: EventWhereInput }
  ) => BatchPayloadPromise;
  upsertEvent: (
    args: {
      where: EventWhereUniqueInput;
      create: EventCreateInput;
      update: EventUpdateInput;
    }
  ) => EventPromise;
  deleteEvent: (where: EventWhereUniqueInput) => EventPromise;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayloadPromise;
  createPlace: (data: PlaceCreateInput) => PlacePromise;
  updatePlace: (
    args: { data: PlaceUpdateInput; where: PlaceWhereUniqueInput }
  ) => PlacePromise;
  updateManyPlaces: (
    args: { data: PlaceUpdateManyMutationInput; where?: PlaceWhereInput }
  ) => BatchPayloadPromise;
  upsertPlace: (
    args: {
      where: PlaceWhereUniqueInput;
      create: PlaceCreateInput;
      update: PlaceUpdateInput;
    }
  ) => PlacePromise;
  deletePlace: (where: PlaceWhereUniqueInput) => PlacePromise;
  deleteManyPlaces: (where?: PlaceWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  date: (
    where?: DateSubscriptionWhereInput
  ) => DateSubscriptionPayloadSubscription;
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
  place: (
    where?: PlaceSubscriptionWhereInput
  ) => PlaceSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type DateOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "timestamp_ASC"
  | "timestamp_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PlaceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "url_ASC"
  | "url_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type EventOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PlaceUpsertWithWhereUniqueWithoutEventInput {
  where: PlaceWhereUniqueInput;
  update: PlaceUpdateWithoutEventDataInput;
  create: PlaceCreateWithoutEventInput;
}

export type DateWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PlaceUpdateManyDataInput {
  name?: String;
  url?: String;
}

export interface EventWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  dates_every?: DateWhereInput;
  dates_some?: DateWhereInput;
  dates_none?: DateWhereInput;
  places_every?: PlaceWhereInput;
  places_some?: PlaceWhereInput;
  places_none?: PlaceWhereInput;
  AND?: EventWhereInput[] | EventWhereInput;
  OR?: EventWhereInput[] | EventWhereInput;
  NOT?: EventWhereInput[] | EventWhereInput;
}

export interface EventUpdatemenusInput {
  set?: String[] | String;
}

export interface DateWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  timestamp?: String;
  timestamp_not?: String;
  timestamp_in?: String[] | String;
  timestamp_not_in?: String[] | String;
  timestamp_lt?: String;
  timestamp_lte?: String;
  timestamp_gt?: String;
  timestamp_gte?: String;
  timestamp_contains?: String;
  timestamp_not_contains?: String;
  timestamp_starts_with?: String;
  timestamp_not_starts_with?: String;
  timestamp_ends_with?: String;
  timestamp_not_ends_with?: String;
  event?: EventWhereInput;
  AND?: DateWhereInput[] | DateWhereInput;
  OR?: DateWhereInput[] | DateWhereInput;
  NOT?: DateWhereInput[] | DateWhereInput;
}

export interface EventCreatemenusInput {
  set?: String[] | String;
}

export interface DateUpdateWithWhereUniqueWithoutEventInput {
  where: DateWhereUniqueInput;
  data: DateUpdateWithoutEventDataInput;
}

export interface DateUpdateInput {
  timestamp?: String;
  event?: EventUpdateOneRequiredWithoutDatesInput;
}

export interface EventUpsertWithoutDatesInput {
  update: EventUpdateWithoutDatesDataInput;
  create: EventCreateWithoutDatesInput;
}

export interface EventUpdateOneRequiredWithoutDatesInput {
  create?: EventCreateWithoutDatesInput;
  update?: EventUpdateWithoutDatesDataInput;
  upsert?: EventUpsertWithoutDatesInput;
  connect?: EventWhereUniqueInput;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EventWhereInput;
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
}

export interface EventUpdateWithoutDatesDataInput {
  slug?: String;
  title?: String;
  description?: String;
  places?: PlaceUpdateManyWithoutEventInput;
  menus?: EventUpdatemenusInput;
}

export interface PlaceUpdateManyMutationInput {
  name?: String;
  url?: String;
}

export interface PlaceUpdateManyWithoutEventInput {
  create?: PlaceCreateWithoutEventInput[] | PlaceCreateWithoutEventInput;
  delete?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  disconnect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  update?:
    | PlaceUpdateWithWhereUniqueWithoutEventInput[]
    | PlaceUpdateWithWhereUniqueWithoutEventInput;
  upsert?:
    | PlaceUpsertWithWhereUniqueWithoutEventInput[]
    | PlaceUpsertWithWhereUniqueWithoutEventInput;
  deleteMany?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  updateMany?:
    | PlaceUpdateManyWithWhereNestedInput[]
    | PlaceUpdateManyWithWhereNestedInput;
}

export type EventWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  slug?: String;
}>;

export interface PlaceUpdateWithWhereUniqueWithoutEventInput {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateWithoutEventDataInput;
}

export interface EventUpdateOneRequiredWithoutPlacesInput {
  create?: EventCreateWithoutPlacesInput;
  update?: EventUpdateWithoutPlacesDataInput;
  upsert?: EventUpsertWithoutPlacesInput;
  connect?: EventWhereUniqueInput;
}

export interface PlaceUpdateWithoutEventDataInput {
  name?: String;
  url?: String;
}

export interface EventCreateWithoutPlacesInput {
  slug: String;
  title: String;
  description?: String;
  dates?: DateCreateManyWithoutEventInput;
  menus?: EventCreatemenusInput;
}

export interface DateUpdateManyDataInput {
  timestamp?: String;
}

export interface EventCreateOneWithoutPlacesInput {
  create?: EventCreateWithoutPlacesInput;
  connect?: EventWhereUniqueInput;
}

export interface PlaceScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  AND?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  OR?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  NOT?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
}

export interface EventUpdateManyMutationInput {
  slug?: String;
  title?: String;
  description?: String;
  menus?: EventUpdatemenusInput;
}

export interface PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput;
  data: PlaceUpdateManyDataInput;
}

export interface DateCreateInput {
  timestamp: String;
  event: EventCreateOneWithoutDatesInput;
}

export interface PlaceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  event?: EventWhereInput;
  AND?: PlaceWhereInput[] | PlaceWhereInput;
  OR?: PlaceWhereInput[] | PlaceWhereInput;
  NOT?: PlaceWhereInput[] | PlaceWhereInput;
}

export interface EventCreateWithoutDatesInput {
  slug: String;
  title: String;
  description?: String;
  places?: PlaceCreateManyWithoutEventInput;
  menus?: EventCreatemenusInput;
}

export interface DateUpdateManyWithWhereNestedInput {
  where: DateScalarWhereInput;
  data: DateUpdateManyDataInput;
}

export interface PlaceCreateWithoutEventInput {
  name: String;
  url?: String;
}

export interface DateScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  timestamp?: String;
  timestamp_not?: String;
  timestamp_in?: String[] | String;
  timestamp_not_in?: String[] | String;
  timestamp_lt?: String;
  timestamp_lte?: String;
  timestamp_gt?: String;
  timestamp_gte?: String;
  timestamp_contains?: String;
  timestamp_not_contains?: String;
  timestamp_starts_with?: String;
  timestamp_not_starts_with?: String;
  timestamp_ends_with?: String;
  timestamp_not_ends_with?: String;
  AND?: DateScalarWhereInput[] | DateScalarWhereInput;
  OR?: DateScalarWhereInput[] | DateScalarWhereInput;
  NOT?: DateScalarWhereInput[] | DateScalarWhereInput;
}

export interface DateSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: DateWhereInput;
  AND?: DateSubscriptionWhereInput[] | DateSubscriptionWhereInput;
  OR?: DateSubscriptionWhereInput[] | DateSubscriptionWhereInput;
  NOT?: DateSubscriptionWhereInput[] | DateSubscriptionWhereInput;
}

export interface DateUpdateManyMutationInput {
  timestamp?: String;
}

export interface EventUpdateWithoutPlacesDataInput {
  slug?: String;
  title?: String;
  description?: String;
  dates?: DateUpdateManyWithoutEventInput;
  menus?: EventUpdatemenusInput;
}

export interface DateUpsertWithWhereUniqueWithoutEventInput {
  where: DateWhereUniqueInput;
  update: DateUpdateWithoutEventDataInput;
  create: DateCreateWithoutEventInput;
}

export type PlaceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface DateUpdateWithoutEventDataInput {
  timestamp?: String;
}

export interface PlaceCreateManyWithoutEventInput {
  create?: PlaceCreateWithoutEventInput[] | PlaceCreateWithoutEventInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
}

export interface EventCreateInput {
  slug: String;
  title: String;
  description?: String;
  dates?: DateCreateManyWithoutEventInput;
  places?: PlaceCreateManyWithoutEventInput;
  menus?: EventCreatemenusInput;
}

export interface EventUpsertWithoutPlacesInput {
  update: EventUpdateWithoutPlacesDataInput;
  create: EventCreateWithoutPlacesInput;
}

export interface DateUpdateManyWithoutEventInput {
  create?: DateCreateWithoutEventInput[] | DateCreateWithoutEventInput;
  delete?: DateWhereUniqueInput[] | DateWhereUniqueInput;
  connect?: DateWhereUniqueInput[] | DateWhereUniqueInput;
  disconnect?: DateWhereUniqueInput[] | DateWhereUniqueInput;
  update?:
    | DateUpdateWithWhereUniqueWithoutEventInput[]
    | DateUpdateWithWhereUniqueWithoutEventInput;
  upsert?:
    | DateUpsertWithWhereUniqueWithoutEventInput[]
    | DateUpsertWithWhereUniqueWithoutEventInput;
  deleteMany?: DateScalarWhereInput[] | DateScalarWhereInput;
  updateMany?:
    | DateUpdateManyWithWhereNestedInput[]
    | DateUpdateManyWithWhereNestedInput;
}

export interface EventUpdateInput {
  slug?: String;
  title?: String;
  description?: String;
  dates?: DateUpdateManyWithoutEventInput;
  places?: PlaceUpdateManyWithoutEventInput;
  menus?: EventUpdatemenusInput;
}

export interface DateCreateWithoutEventInput {
  timestamp: String;
}

export interface DateCreateManyWithoutEventInput {
  create?: DateCreateWithoutEventInput[] | DateCreateWithoutEventInput;
  connect?: DateWhereUniqueInput[] | DateWhereUniqueInput;
}

export interface PlaceUpdateInput {
  name?: String;
  url?: String;
  event?: EventUpdateOneRequiredWithoutPlacesInput;
}

export interface PlaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PlaceWhereInput;
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
}

export interface EventCreateOneWithoutDatesInput {
  create?: EventCreateWithoutDatesInput;
  connect?: EventWhereUniqueInput;
}

export interface PlaceCreateInput {
  name: String;
  url?: String;
  event: EventCreateOneWithoutPlacesInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PlacePreviousValues {
  id: ID_Output;
  name: String;
  url?: String;
}

export interface PlacePreviousValuesPromise
  extends Promise<PlacePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  url: () => Promise<String>;
}

export interface PlacePreviousValuesSubscription
  extends Promise<AsyncIterator<PlacePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface AggregateDate {
  count: Int;
}

export interface AggregateDatePromise
  extends Promise<AggregateDate>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDateSubscription
  extends Promise<AsyncIterator<AggregateDate>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Event {
  id: ID_Output;
  slug: String;
  title: String;
  description?: String;
  menus: String[];
}

export interface EventPromise extends Promise<Event>, Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  dates: <T = FragmentableArray<Date>>(
    args?: {
      where?: DateWhereInput;
      orderBy?: DateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  places: <T = FragmentableArray<Place>>(
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  menus: () => Promise<String[]>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<Event>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  slug: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  dates: <T = Promise<AsyncIterator<DateSubscription>>>(
    args?: {
      where?: DateWhereInput;
      orderBy?: DateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  places: <T = Promise<AsyncIterator<PlaceSubscription>>>(
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  menus: () => Promise<AsyncIterator<String[]>>;
}

export interface DateEdge {
  cursor: String;
}

export interface DateEdgePromise extends Promise<DateEdge>, Fragmentable {
  node: <T = DatePromise>() => T;
  cursor: () => Promise<String>;
}

export interface DateEdgeSubscription
  extends Promise<AsyncIterator<DateEdge>>,
    Fragmentable {
  node: <T = DateSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Place {
  id: ID_Output;
  name: String;
  url?: String;
}

export interface PlacePromise extends Promise<Place>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  url: () => Promise<String>;
  event: <T = EventPromise>() => T;
}

export interface PlaceSubscription
  extends Promise<AsyncIterator<Place>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  event: <T = EventSubscription>() => T;
}

export interface DateConnection {}

export interface DateConnectionPromise
  extends Promise<DateConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<DateEdge>>() => T;
  aggregate: <T = AggregateDatePromise>() => T;
}

export interface DateConnectionSubscription
  extends Promise<AsyncIterator<DateConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DateEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDateSubscription>() => T;
}

export interface EventPreviousValues {
  id: ID_Output;
  slug: String;
  title: String;
  description?: String;
  menus: String[];
}

export interface EventPreviousValuesPromise
  extends Promise<EventPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  menus: () => Promise<String[]>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  slug: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  menus: () => Promise<AsyncIterator<String[]>>;
}

export interface AggregatePlace {
  count: Int;
}

export interface AggregatePlacePromise
  extends Promise<AggregatePlace>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlaceSubscription
  extends Promise<AsyncIterator<AggregatePlace>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PlaceConnection {}

export interface PlaceConnectionPromise
  extends Promise<PlaceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlaceEdge>>() => T;
  aggregate: <T = AggregatePlacePromise>() => T;
}

export interface PlaceConnectionSubscription
  extends Promise<AsyncIterator<PlaceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlaceEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlaceSubscription>() => T;
}

export interface Date {
  id: ID_Output;
  timestamp: String;
}

export interface DatePromise extends Promise<Date>, Fragmentable {
  id: () => Promise<ID_Output>;
  timestamp: () => Promise<String>;
  event: <T = EventPromise>() => T;
}

export interface DateSubscription
  extends Promise<AsyncIterator<Date>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  timestamp: () => Promise<AsyncIterator<String>>;
  event: <T = EventSubscription>() => T;
}

export interface EventEdge {
  cursor: String;
}

export interface EventEdgePromise extends Promise<EventEdge>, Fragmentable {
  node: <T = EventPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdge>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface EventSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface EventSubscriptionPayloadPromise
  extends Promise<EventSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EventPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValuesPromise>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface DatePreviousValues {
  id: ID_Output;
  timestamp: String;
}

export interface DatePreviousValuesPromise
  extends Promise<DatePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  timestamp: () => Promise<String>;
}

export interface DatePreviousValuesSubscription
  extends Promise<AsyncIterator<DatePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  timestamp: () => Promise<AsyncIterator<String>>;
}

export interface DateSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface DateSubscriptionPayloadPromise
  extends Promise<DateSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DatePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DatePreviousValuesPromise>() => T;
}

export interface DateSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DateSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DateSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DatePreviousValuesSubscription>() => T;
}

export interface EventConnection {}

export interface EventConnectionPromise
  extends Promise<EventConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EventEdge>>() => T;
  aggregate: <T = AggregateEventPromise>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
}

export interface AggregateEvent {
  count: Int;
}

export interface AggregateEventPromise
  extends Promise<AggregateEvent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEvent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PlaceEdge {
  cursor: String;
}

export interface PlaceEdgePromise extends Promise<PlaceEdge>, Fragmentable {
  node: <T = PlacePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlaceEdgeSubscription
  extends Promise<AsyncIterator<PlaceEdge>>,
    Fragmentable {
  node: <T = PlaceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PlaceSubscriptionPayloadPromise
  extends Promise<PlaceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlacePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlacePreviousValuesPromise>() => T;
}

export interface PlaceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlaceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlaceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlacePreviousValuesSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Date",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Place",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
