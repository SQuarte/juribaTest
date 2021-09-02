import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeListPageComponent } from './youtube-list-page.component';
import { YoutubeListPageProxy } from '../../__redux/youtube-list-page.proxy';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

//Created this class to show one option of mocking services/stores for testing components
//Also we can use spy object for this purpose
class MockedListPageProxy {
  private listItemsSubject = new BehaviorSubject<any[]>([]);
  listItems$ = this.listItemsSubject.asObservable();
  itemsCount$ = this.listItemsSubject.pipe(
    map((items: any[]) => items.length)
  )
  selectedItemsCount$ = this.listItemsSubject.pipe(
    map((items: any[]) => items.reduce((acc, value) => acc + Number(value.selection), 0))
  );
  allItemsSelected$ =  this.listItemsSubject.pipe(
    map((items: any[]) => items.every(item => item.selection))
  );

  fetchYoutubeData() {
    this.listItemsSubject.next([
      {
        id: '1',
        selection: false,
        title: 'Title1',
        publishedAt: '10.10.10',
        description: 'Description 1',
        thumbnails: {
          default: {
            url: 'test'
          }
        }
      },{
        id: '2',
        selection: false,
        title: 'Title2',
        publishedAt: '11.11.11',
        description: 'Description 2',
        thumbnails: {
          default: {
            url: 'test2'
          }
        }
      }
    ])
  }

  selectRow(id: string, selection: boolean) {
    const items = this.listItemsSubject.getValue();
    const newItems = items.map(item => ({
      ...item,
      selection: (item.id === id) ? selection: item.selection
    }));
    this.listItemsSubject.next(newItems);
  }

  selectAll() {
    const items = this.listItemsSubject.getValue();
    const newItems = items.map(item => ({
      ...item,
      selection: true
    }));
    this.listItemsSubject.next(newItems);
  }

  deselectAll() {
    const items = this.listItemsSubject.getValue();
    const newItems = items.map(item => ({
      ...item,
      selection: false
    }));
    this.listItemsSubject.next(newItems);
  }
}

describe('YoutubeListPageComponent', () => {
  let component: YoutubeListPageComponent;
  let fixture: ComponentFixture<YoutubeListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeListPageComponent ],
      providers: [
        {
          provide: YoutubeListPageProxy,
          useClass: MockedListPageProxy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
