import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const signUp = async ( req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    console.log(name, email, password);

    if(!name || !email || !password) {
      throw new Error('Insira todas as informações para o cadastro');
    };

    if(password.length < 6) {
      throw new Error('A senha deve conter no mínimo seis caracteres');
    };

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const userDatabase = new UserDatabase();
    await userDatabase.registerUser(
      id,
      name,
      email,
      hashPassword
    );

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({id});

    res.status(200).send({
      erro: false,
      message: 'Usuário criado com sucesso',
      token
    });

  } catch (error) {
    res.status(400).send({
      message: error.message,
      erro: true
    })
  }
}