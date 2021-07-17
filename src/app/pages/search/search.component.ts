import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  isTrue = false;
  constructor(
    public fb: FormBuilder,
    public artistService: ArtistService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.searchForm
      .get('search')
      .valueChanges.pipe(
        debounceTime(500),
        tap((_) => {
          this._applySearch();
        })
      )
      .subscribe();
  }

  // @HostListener('mouseenter', ['$event'])
  // onMouseEnter(event) {
  //   console.log('x', event);
  //   if (event.target.matches('.container__user__prueba')) {
  //     this.isTrue = true;
  //   }
  // }

  // @HostListener('mouseleave', ['$event'])
  // onMouseLeave(event) {
  //   console.log('x');

  //   if (event.target.matches('.container__user__prueba')) {
  //     this.isTrue = false;
  //   }
  // }

  _applySearch() {
    console.log('applly');

    const { search } = this.searchForm.value;
    this.artistService.searchByKeyword(search);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
