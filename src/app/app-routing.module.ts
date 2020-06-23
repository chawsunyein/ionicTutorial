import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ActionsheetComponent } from './actionsheet/actionsheet.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipComponent } from './chip/chip.component';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { FabbuttonComponent } from './fabbutton/fabbutton.component';
import { FabcontainerComponent } from './fabcontainer/fabcontainer.component';
import { FablistComponent } from './fablist/fablist.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { HidewhenComponent } from './hidewhen/hidewhen.component';
import { IconComponent } from './icon/icon.component';
import { ImgComponent } from './img/img.component';
import { InfinitescrollComponent } from './infinitescroll/infinitescroll.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ItemoptionComponent } from './itemoption/itemoption.component';
import { ItemreorderComponent } from './itemreorder/itemreorder.component';
import { ItemslidingComponent } from './itemsliding/itemsliding.component';
import { LabelComponent } from './label/label.component';
import { IonNoteComponent } from './ion-note/ion-note.component';
import { IonListComponent } from './ion-list/ion-list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListThumbnailComponent } from './list-thumbnail/list-thumbnail.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { MenucloseComponent } from './menuclose/menuclose.component';
import { MenutoggleComponent } from './menutoggle/menutoggle.component';
import { MenusplitpaneComponent } from './menusplitpane/menusplitpane.component';
import { IonmodalComponent } from './ionmodal/ionmodal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavpushComponent } from './navpush/navpush.component';
import { NavpopComponent } from './navpop/navpop.component';
import { NoteComponent } from './note/note.component';
import { OptionComponent } from './option/option.component';
import { IonplatformComponent } from './ionplatform/ionplatform.component';
import { IonpopoverComponent } from './ionpopover/ionpopover.component';
import { RadioComponent } from './radio/radio.component';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';
import { RangeComponent } from './range/range.component';
import { RefresherComponent } from './refresher/refresher.component';
import { ReorderComponent } from './reorder/reorder.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SegmentComponent } from './segment/segment.component';
import { SegmentbuttonComponent } from './segmentbutton/segmentbutton.component';
import { SelectComponent } from './select/select.component';
import { ShowwhenComponent } from './showwhen/showwhen.component';
import { SlideComponent } from './slide/slide.component';
import { SlidesComponent } from './slides/slides.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SplitepaneComponent } from './splitepane/splitepane.component';
import { TabComponent } from './tab/tab.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { TitleComponent } from './title/title.component';
import { ToastComponent } from './toast/toast.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { TypographyComponent } from './typography/typography.component';
import { VirtualscrollComponent } from './virtualscroll/virtualscroll.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'actionsheet', pathMatch: 'full', component: ActionsheetComponent },
  { path: 'alert', pathMatch: 'full', component: AlertComponent },
  { path: 'badge', pathMatch: 'full', component: BadgeComponent },
  { path: 'button', pathMatch: 'full', component: ButtonComponent },
  { path: 'avatar', pathMatch: 'full', component: AvatarComponent },
  { path: 'checkbox', pathMatch: 'full', component: CheckboxComponent },
  { path: 'chip', pathMatch: 'full', component: ChipComponent },
  { path: 'card', pathMatch: 'full', component: CardComponent },
  { path: 'content', pathMatch: 'full', component: ContentComponent },
  { path: 'datetime', pathMatch: 'full', component: DatetimeComponent },
  { path: 'fabbutton', pathMatch: 'full', component: FabbuttonComponent },
  { path: 'fabcontainer', pathMatch: 'full', component: FabcontainerComponent },
  { path: 'fablist', pathMatch: 'full', component: FablistComponent },
  { path: 'footer', pathMatch: 'full', component: FooterComponent },
  { path: 'grid', pathMatch: 'full', component: GridComponent },
  { path: 'header', pathMatch: 'full', component: HeaderComponent },
  { path: 'hidewhen', pathMatch: 'full', component: HidewhenComponent },
  { path: 'icon', pathMatch: 'full', component: IconComponent },
  { path: 'img', pathMatch: 'full', component: ImgComponent },
  { path: 'infinitescroll', pathMatch: 'full', component: InfinitescrollComponent },
  { path: 'input', pathMatch: 'full', component: InputComponent },
  { path: 'item', pathMatch: 'full', component: ItemComponent },
  { path: 'itemoption', pathMatch: 'full', component: ItemoptionComponent },
  { path: 'itemreorder', pathMatch: 'full', component: ItemreorderComponent },
  { path: 'itemsliding', pathMatch: 'full', component: ItemslidingComponent },
  { path: 'label', pathMatch: 'full', component: LabelComponent },
  { path: 'ion-note', pathMatch: 'full', component: IonNoteComponent },
  { path: 'ion-list', pathMatch: 'full', component: IonListComponent },
  { path: 'list-header', pathMatch: 'full', component: ListHeaderComponent },
  { path: 'list-thumbnail', pathMatch: 'full', component: ListThumbnailComponent },
  { path: 'loading', pathMatch: 'full', component: LoadingComponent },
  { path: 'menu', pathMatch: 'full', component: MenuComponent },
  { path: 'menuclose', pathMatch: 'full', component: MenucloseComponent },
  { path: 'menutoggle', pathMatch: 'full', component: MenutoggleComponent },
  { path: 'menusplitpane', pathMatch: 'full', component: MenusplitpaneComponent },
  { path: 'ionmodal', pathMatch: 'full', component: IonmodalComponent },
  { path: 'navbar', pathMatch: 'full', component: NavbarComponent },
  { path: 'navpush', pathMatch: 'full', component: NavpushComponent },
  { path: 'navpop', pathMatch: 'full', component: NavpopComponent },
  { path: 'note', pathMatch: 'full', component: NoteComponent },
  { path: 'option', pathMatch: 'full', component: OptionComponent },
  { path: 'ionplatform', pathMatch: 'full', component: IonplatformComponent },
  { path: 'ionpopover', pathMatch: 'full', component: IonpopoverComponent },
  { path: 'radio', pathMatch: 'full', component: RadioComponent },
  { path: 'radiogroup', pathMatch: 'full', component: RadiogroupComponent },
  { path: 'range', pathMatch: 'full', component: RangeComponent },
  { path: 'refresher', pathMatch: 'full', component: RefresherComponent },
  { path: 'reorder', pathMatch: 'full', component: ReorderComponent },
  { path: 'scroll', pathMatch: 'full', component: ScrollComponent },
  { path: 'searchbar', pathMatch: 'full', component: SearchbarComponent },
  { path: 'segment', pathMatch: 'full', component: SegmentComponent },
  { path: 'segmentbutton', pathMatch: 'full', component: SegmentbuttonComponent },
  { path: 'select', pathMatch: 'full', component: SelectComponent },
  { path: 'showwhen', pathMatch: 'full', component: ShowwhenComponent },
  { path: 'slide', pathMatch: 'full', component: SlideComponent },
  { path: 'slides', pathMatch: 'full', component: SlidesComponent },
  { path: 'spinner', pathMatch: 'full', component: SpinnerComponent },
  { path: 'splitpane', pathMatch: 'full', component: SplitepaneComponent },
  { path: 'tab', pathMatch: 'full', component: TabComponent },
  { path: 'thumbnail', pathMatch: 'full', component: ThumbnailComponent },
  { path: 'title', pathMatch: 'full', component: TitleComponent },
  { path: 'toast', pathMatch: 'full', component: ToastComponent },
  { path: 'toggle', pathMatch: 'full', component: ToggleComponent },
  { path: 'toolbar', pathMatch: 'full', component: ToolbarComponent },
  { path: 'backbutton', pathMatch: 'full', component: BackbuttonComponent },
  { path: 'typography', pathMatch: 'full', component: TypographyComponent },
  { path: 'virtualscroll', pathMatch: 'full', component: VirtualscrollComponent },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
