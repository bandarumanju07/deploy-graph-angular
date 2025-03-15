import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCTS, GET_PRODUCTS_BY_ID } from '../graphql.operations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  products: any[] = [];
  error: any;

  searchForm = new FormGroup({
    username: new FormControl('gethackteam', Validators.required),
  });

  searchPosts() {
    this.apollo.query({
      query: GET_PRODUCTS_BY_ID,
      variables: {
        username: this.searchForm.value.username,
      }
    }).subscribe(({ data }: any) => {
      this.products = data.products;
    });

  }

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_PRODUCTS
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.products = data.products;
      this.error = error;
    }
    );
  }
}