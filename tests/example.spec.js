// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

//comprobar que la app nos de un texto y una imagen 
test('app shows random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  //comprobamos que la etiqueta p carque texto
  const text = await page.getByRole('paragraph')

  const textContent = await text.textContent()
  
  await expect(textContent?.length).toBeGreaterThan(0)
});
