import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayListComponent } from './music-play-list.component';

describe('MusicPlayListComponent', () => {
  let component: MusicPlayListComponent;
  let fixture: ComponentFixture<MusicPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicPlayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
