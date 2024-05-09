import {gql} from 'apollo-server'
import {ApolloServer} from 'apollo-server'
import { PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


const typeDefs = gql`

type Query{
    alluser :[Rpg]
}

type Rpg{
id : Int,
name : String
}

`
const resolvers = {
    Query : {
        alluser : async ()=>{
           const alluser = await prisma.rpg.findMany()
           return alluser
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});