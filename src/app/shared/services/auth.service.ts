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
    const usuarioLogado = localStorage.getItem('user');
    return usuarioLogado !== null ? true : false;
  }

  login(usuario:any){
    return this.afAuth.signInWithEmailAndPassword(usuario.username,usuario.password).then((resposta:any) => { this.afAuth.authState.subscribe((resp:any)=> {
        if(resp){
          this.router.navigate(['home'])
        }
      })
    }).catch((error:any)=>{
      console.log(error)
    })
    

  }
  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['login'])
      localStorage.removeItem('user')
    })
  }
  
}
