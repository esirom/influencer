import { InfluencerPage } from './app.po';

describe('influencer App', function() {
  let page: InfluencerPage;

  beforeEach(() => {
    page = new InfluencerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
