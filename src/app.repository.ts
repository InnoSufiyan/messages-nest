import { Injectable } from "@nestjs/common"
import { readFile, writeFile } from "fs/promises"

@Injectable()
export class MessagesRepository {

    async create(content: string) {
        console.log(content)
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)
        console.log(messages, "==>> messages")
        const id = Math.floor(Math.random() * 999)
        messages[id] = { id, content }
        await writeFile('messages.json', JSON.stringify(messages))
        return messages
    }
    async findAll() {
        console.log('finding all')
        const contents = await readFile('messages.json', 'utf8')
        console.log(contents)
        return JSON.parse(contents)
    }
    async findOne(id: string) {
        console.log('finding one', id)
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)
        console.log(messages)
        console.log(messages[id])
        return messages[id]
    }
}