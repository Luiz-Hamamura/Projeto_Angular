import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteCadastrar } from './cliente-cadastrar';

describe('ClienteCadastrar', () => {
  let component: ClienteCadastrar;
  let fixture: ComponentFixture<ClienteCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
