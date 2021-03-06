import {HeroesComponent} from './heroes.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {Hero} from '../hero';
import {By} from '@angular/platform-browser';
import {HeroComponent} from '../hero/hero.component';

describe('HeroesComponent (shallow)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Women', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55},
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should render hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    // run ngOnInit
    fixture.detectChanges();
    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));

    expect(heroComponentDEs.length).toEqual(3);

    // expect(heroComponentDEs[0].componentInstance.hero.name).toEqual('SpiderDude');
    // expect(heroComponentDEs[0].componentInstance.hero.name).toEqual('Wonderful Women');
    // expect(heroComponentDEs[0].componentInstance.hero.name).toEqual('SuperDude');

    for (let i = 0; i < heroComponentDEs.length; i++) {
      expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
    }
  });
});
