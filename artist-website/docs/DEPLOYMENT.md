# Putting the Website Live

The website goes live in about an hour of work, plus a wait of up to 24 hours while the internet catches up.
Hosting on Cloudflare Pages is free. The only yearly cost is renewing the domain.

There are two ways to get the files onto Cloudflare. Pick one before the first deploy, because
Cloudflare doesn't let a drag-and-drop project switch to GitHub later.

| Option | How updates work | Best for |
| --- | --- | --- |
| **A. Drag and drop** | Upload the whole folder again after each change | The artist managing it himself |
| **B. Connect to GitHub** | Every push to the chosen branch republishes the site automatically | Whoever maintains this repo |

## Before you start

- [ ] The `artist-website` folder (`index.html` plus `images/`)
- [ ] The login for the company where the domain was bought (GoDaddy, Namecheap or Cloudflare)
- [ ] An email address the artist will keep for years, in his own name
- [ ] A laptop or desktop
- [ ] About one hour

## Step 1: Create a free Cloudflare account

1. Go to **dash.cloudflare.com** and click **Sign up**, using the artist's own email.
2. Confirm the email Cloudflare sends.
3. Turn on **two-factor authentication** in the profile settings.

If the domain was bought from Cloudflare, use that same account.

## Step 2: Put the website on Cloudflare Pages

### Option A: Drag and drop

1. Open **Workers & Pages** → **Create application** → **Pages** → **Drag and drop your files**
   (some screens say **Upload assets**).
2. Give the project a name, for example the artist's name in lowercase. This becomes `name.pages.dev`.
3. Drag the whole `artist-website` folder (or a zip of it) into the upload box.
4. Click **Deploy site** and open the `.pages.dev` link to check every section.

### Option B: Connect to GitHub

1. Open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Authorise Cloudflare on GitHub and pick `adityam1292/repository`.
3. Choose the production branch (`master` once this work is merged).
4. Build settings:
   - Framework preset: **None**
   - Build command: leave empty, or `exit 0` if a value is required
   - Build output directory: `artist-website`
5. Click **Save and Deploy** and open the `.pages.dev` link to check the site.

## Step 3: Point the domain to Cloudflare

Skip this if the domain was bought from Cloudflare.

In Cloudflare:

1. Click **Add a domain** (older screens: **Add a site**), enter `yourname.com`, choose the **Free** plan.
2. Leave the imported DNS records as they are and continue.
3. Note the **two nameservers** Cloudflare gives you.

At the domain company:

1. Open the domain's nameserver settings.
   GoDaddy: **My Products → domain → DNS → Nameservers**. Namecheap: **Domain List → Manage → Nameservers**.
2. Choose custom nameservers (GoDaddy: **I'll use my own nameservers**, Namecheap: **Custom DNS**).
3. Replace the old nameservers with Cloudflare's two and save.
4. If **DNSSEC** is on, switch it off.

Wait until Cloudflare emails that the domain is **Active**. Usually minutes to a few hours, at most 24 hours.

## Step 4: Connect the domain to the website

1. **Workers & Pages** → the project → **Custom domains** → **Set up a domain**.
2. Enter `yourname.com` → **Continue** → confirm.
3. Repeat for `www.yourname.com`.
4. Wait until both show **Active**. Cloudflare sets up HTTPS automatically.

## Step 5: Check that everything works

Test on a phone (mobile data and Wi-Fi) and a laptop.

- [ ] `yourname.com` and `www.yourname.com` both open the site
- [ ] The address bar shows a padlock, no "Not secure" warning
- [ ] Every painting photo loads
- [ ] Clicking a painting opens its details
- [ ] Contact details are correct
- [ ] No sideways scrolling on the phone

## After it's live

**Updating:** with Option A, open the project → **Create deployment** → **Production** and upload the whole folder.
With Option B, push to the production branch. Either way, earlier versions stay under **Deployments** for rollback.

**Keeping it safe:**

- Turn on auto-renew for the domain and keep a valid card on that account.
- Keep both accounts (domain and Cloudflare) in the artist's name, with two-factor login.
- Never delete the domain from Cloudflare.

## If something goes wrong

| What you see | What to do |
| --- | --- |
| The domain still shows the old company's parking page | Wait up to 24 hours. Check that both nameservers were pasted exactly. |
| Cloudflare still says pending after 24 hours | Switch off DNSSEC at the domain company, then click **Check nameservers**. |
| "Not secure" warning | HTTPS is still being set up. Wait an hour. |
| Works on Wi-Fi but not mobile data | Some networks catch up later. Restart the phone or wait a few hours. |
| Paintings show as empty boxes | File names are case-sensitive. Make the names in `index.html` and `images/` match exactly. |
| Domain email stopped arriving | Add the email provider's records on the domain's **DNS** page in Cloudflare. |
| Error 522 | Remove the domain and add it again from **Custom domains**. |

## Sources

- [Cloudflare Pages: Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [Cloudflare Pages: Custom domains](https://developers.cloudflare.com/pages/platform/custom-domains/)
