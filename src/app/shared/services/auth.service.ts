import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth, public router:Router) { 
    this.afAuth.authState.subscribe((user)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user))
      }
      else{
        localStorage.setItem('user','null')
      }
    })
  }

  get logado(): boolean {
    const usuarioLogado = JSON.parse(localStorage.getItem('user')!);
    return usuarioLogado !== null ? true : false;
  }

  login(usuario:any){
    return this.afAuth.signInWithEmailAndPassword(usuario.username,usuario.password).then((resposta:any) => { this.afAuth.authState.subscribe((resp:any)=> {
        if(resp){
          this.router.navigate(['home'])
        }
      })
    }) .catch((error: any) => {
      if (error.code === 'auth/wrong-password') {
        alert('Senha incorreta. Por favor, verifique a senha e tente novamente.');
      } else if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        alert('Email inválido ou não encontrado.');
      } else {
        alert('Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.');
      }
      console.log(error);
    });
}
  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['login'])
      localStorage.removeItem('user')
    })
  }
  
}
