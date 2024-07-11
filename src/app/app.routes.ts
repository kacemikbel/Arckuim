import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'aboutus', component: AboutUsComponent },
];
