const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
 Query: {
   events: (parent, args, context) => {
     return context.prisma.events();
   },
   event: (parent, { slug }, context) => {
     return context.prisma.event({ slug });
   }
 },
 Event: {
   places: (parent, { id }, context) => {
     return context.prisma.event({ id: parent.id }).places();
   },
   dates: (parent, { id }, context) => {
     return context.prisma.event({ id: parent.id }).dates();
   },
   participants: (parent, { id }, context) => {
     return context.prisma.event({ id: parent.id }).participants();
   }
 },
 Mutation: {
   createEvent(parent, { title, slug }, context) {
     return context.prisma.createEvent({ title, slug });
   },
   updateEvent(parent, { id, title, slug, description, photo, dates, menus }, context) {
     return context.prisma.updateEvent({
       where: { id },
       data: { title, slug, description, photo, dates: { set: dates }, menus: { set: menus } }
     });
   },
   deleteEvent(parent, { id }, context) {
     return context.prisma.deleteEvent({ id });
   },
   createDate(parent, { timestamp, event }, context) {
     return context.prisma.createDate({
       timestamp,
       event: { connect: { id: event } },
     });
   },
   deleteDate(parent, { id }, context) {
     return context.prisma.deleteDate({ id });
   },
   createPlace(parent, { name, url, event }, context) {
     return context.prisma.createPlace({
       name,
       url,
       event: { connect: { id: event } },
     });
   },
   deletePlace(parent, { id }, context) {
     return context.prisma.deletePlace({ id });
   },
   createParticipant(parent, { name, event }, context) {
     return context.prisma.createParticipant({
       name,
       event: { connect: { id: event } },
     });
   },
   deleteParticipant(parent, { id }, context) {
     return context.prisma.deleteParticipant({ id });
   },
   updateParticipant(parent, { id, dates, places }, context) {
     return context.prisma.updateParticipant({
       where: { id },
       data: {
         dates: { set: dates },
         places: { set: places }
      }
     });
   },
 },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
