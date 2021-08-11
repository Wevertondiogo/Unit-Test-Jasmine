import { LikeWidgetModule } from './like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    expect(component.id).toBeTruthy();
  });

  it('should NOT auto-generate ID during ngOnInit when (@Input id) is  assigned', () => {
    const someId = 'someId';
    component.id = someId;

    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@output liked) when called`, ()=> {
    spyOn(component.liked, 'emit');
    component.like();

    expect(component.liked.emit).toHaveBeenCalled();
  })
});
