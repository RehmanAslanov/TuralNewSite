# Changelog

Bu faylda layihə üzrə vacib dəyişikliklər qeyd olunur.

Format Keep a Changelog prinsiplərinə əsaslanır.

## [Unreleased]

## [fix-lang] - 2026-05-19

### Added
- EN, RU və AZ üçün tam lokalizasiya xəritəsi əlavə edildi.
- URL əsaslı dil dəstəyi əlavə edildi: ?lang=az, ?lang=en, ?lang=ru.
- Dil seçimlərinin saxlanması üçün localStorage inteqrasiyası əlavə edildi.
- UI elementlərinə lokalizasiya atributları əlavə edildi:
  - data-i18n
  - data-i18n-html
  - data-i18n-placeholder
  - data-i18n-alt

### Changed
- Dil seçimi linkləri (EN/RU/AZ) yalnız vizual aktivlikdən çıxarılıb real məzmun dəyişiminə keçirildi.
- Header, hero, bölmə başlıqları, düymələr, form etiketləri, placeholder-lar və footer mətnləri seçilmiş dilə görə dinamik yenilənir.
- Form göndəriş bildirişi seçilmiş dilə uyğun göstərilir.
- YouTube önizləmə düyməsindəki mətnlər seçilmiş dilə uyğun yenilənir.
- Dil dəyişdirildikdə URL parametri avtomatik sinxronlaşdırılır.

### Fixed
- Azərbaycanca mətnlərdə imla və yazılış xətaları düzəldildi.
- EN/RU seçildikdə dilin faktiki dəyişməməsi problemi aradan qaldırıldı.

[Unreleased]: https://github.com/RehmanAslanov/TuralNewSite/compare/d25c1dd...HEAD
