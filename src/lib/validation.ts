import { z } from "zod";



const requiredString = z.string().trim().min(1,'required.')

export const SignUpShchema = z.object({
    username:requiredString.regex(/^[a-zA-Z0-9-_]+$/,'only numbers,letter and "-,_" is useable.'),
    email:requiredString.email('please enter valid Email.'),
    password:requiredString.min(8,'minimum 8 char are required.')
})

export type SignUpValues = z.infer<typeof SignUpShchema>;


export const LoginSchema = z.object({
    username:requiredString,
    password:requiredString
})

export type Loginvalues = z.infer<typeof LoginSchema>


export const createStreamSchema = z.object({
    creatorId:requiredString,
    url:requiredString
})

export type createStreamType = z.infer<typeof createStreamSchema>;

export const UpvoteSchema = z.object({
    streamId:requiredString
});
export type Upvotevalues = z.infer<typeof UpvoteSchema>;