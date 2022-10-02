
import fs from 'node:fs'


var data = fs.readFileSync('./test.md', {encoding: 'utf-8'})

const metadata = data.split('# {').slice(1).map(chunk => {
    const titleChunk = chunk.split('\n')[0];
    const textChunk = chunk.split('\n').slice(1).join('\n').trimStart()

    const id = titleChunk.split('{')[0].split('[')[0].trim();
    const title =  titleChunk.split(']}')[1].trim()

    const nextList = titleChunk.split('[')[1].split(']')[0]

    const next = nextList.split(',');

    

    const item = {
        id,
        title,
        markdown: textChunk,
        next
    }
    console.log(JSON.stringify(item))
    console.log('##############')
    return item;
})

fs.writeFileSync('src/utils/md.json', JSON.stringify(metadata))