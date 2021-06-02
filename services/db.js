import { constants as fsConstants, promises as fs } from 'fs';

class DB {
    async createFileIfNotExists(userPath) {
        try {
            await fs.access(userPath, fsConstants.F_OK);
        } catch ({ code }) {
            if (code === 'ENOENT') {
                await fs.writeFile(userPath, JSON.stringify([]), 'utf-8');
            }
        }
    }

    async getUsers(userPath) {
        await this.createFileIfNotExists(userPath);

        const usersRAW = await fs.readFile(userPath, 'utf-8');
        const users = usersRAW ? JSON.parse(usersRAW) : [];

        return users;
    }

    async saveUsers(userPath, nextUsers) {
        if (!Array.isArray(nextUsers)) {
            throw new Error('аргумент должен быть массивом');
        }

        await fs.writeFile(userPath, JSON.stringify(nextUsers, null, 4), 'utf-8');
    }
}

export const db = new DB();
