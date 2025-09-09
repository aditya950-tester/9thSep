import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thomesinfra.com/');
  await page.getByRole('link', { name: 'Th-15 AVP – CHOLLERU PHASE-1&' }).click();
  await page.locator('#masthead').getByRole('link', { name: 'Youtube ' }).click();
  await page.getByText('Playlists').click();
  
  await page.locator('a').filter({ hasText: 'videoPlay all' }).click();
  await page.getByRole('button', { name: 'Full screen keyboard shortcut' }).click();
  await page.getByRole('button', { name: 'Pause keyboard shortcut k' }).click();
});

