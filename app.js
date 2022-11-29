const fs = require ('fs/promises');
const path =require ('path');

// розсортувати файли по відповідним папкам за полем гендер

const sort = async (readFolder, writeFolder, gender) => {
    const folderPath = path.join( __dirname, readFolder);

    const files = await fs.readdir(folderPath)

    for (const file of files) {
       const filePath = path.join(folderPath, file)
       const data =await fs.readFile(filePath);
       const user = JSON.parse(data);

        if (user.gender === gender) {
            await fs.rename(filePath, path.join(__dirname, writeFolder, file))
        }
    }
}

sort ('boys', 'girls', 'female');
sort( 'girls', 'boys', 'male');
