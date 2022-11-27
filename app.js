const fs = require ('node:fs')

// читаємо файл
// fs.readFile('./text.txt', (err, data) => {
//     console.log(err);
//     console.log(data);
//     console.log(data.toString());
// });

// додаємо дані у файл
// fs.appendFile('./text.txt','this command added new text to previous\n', (err) =>{
//     console.log('ERR', err);
// } );


// перезаписуємо дані у файлі
// fs.writeFile('./text.txt', 'this command rewrite text in file', (err) => {
//     console.log('ERR', err);
// });

//прочитали файл та додали його дані у новий файл
 // fs.readFile('./text.txt', (err, data) => {
 //     fs.appendFile('./copy.txt', data, () =>{})
 // });

//створили нову папку
// fs.mkdir('./newDirectory', (err)=>{
//     console.log(err);
// })

//у новій папці створили новий файл та записали у ньогодані
// fs.appendFile('./newDirectory/newFile.json', JSON.stringify({name: 'Mariia'}), (err) =>{
//     console.log(err);
// });

//очистили вміст файлу
// fs.truncate('./copy.txt', (err)=>{
//     console.log(err);
// });

//видалили файл
// fs.unlink('./copy.txt', (err)=>{
//      console.log(err);
// });

//видалити папку з усім вмістом
// fs.rmdir('./newDirectory', {recursive:true}, err=>{
//      console.log(err);
// });

//переіменувати файл
// fs.rename('./text.txt', './renameText.txt',(err)=>{
//     console.log(err);
// });

//перемістити файл і переіменувати
// fs.rename('./renameText.txt', './someDir/rename.txt',(err)=>{
//     console.log(err);
// })

//скопіювати файл
// fs.copyFile('./someDir/rename.txt', './newCopy.txt', err => {
//     console.log(err);
// })
