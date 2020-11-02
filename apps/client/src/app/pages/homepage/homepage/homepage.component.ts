import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'trip-to-colchis-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public argonauts: Observable<any[]>;
  public argonautName: string;

  public argonautInput = new FormControl('');

  constructor(private firestore: AngularFirestore) {
    this.argonauts = firestore.collection('argonauts', ref => ref.orderBy('name', 'asc')).valueChanges();
  }

  async addArgonaut() {
    const docId = this.firestore.createId();

    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('argonauts')
      .doc(docId)
      .set({
        name: this.argonautName
      })
      .then(res => {
        this.argonautInput.reset();
      }, err => reject(err));
    });
  }

}
