import { TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(TestBed.inject(ElementRef));
    expect(directive).toBeTruthy();
  });
});
