/*!
 * Krajee/Kartik FileInput <TR> Çeviri
 *
 * Bu dosya, 'fileinput.js'den sonra yüklenmelidir. Küme ayraçları '{}' içindeki desenler
 * veya iletilerdeki herhangi bir HTML biçimlendirme etiketi dönüştürülmemeli veya çevrilmemelidir.
 *
 * @fazlası http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOT: bu dosya UTF-8 kodlamasında kaydedilmelidir.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['tr'] = {
        fileSingle: 'dosya',
        filePlural: 'dosyalar',
        browseLabel: 'Gözat &hellip;',
        removeLabel: 'Kaldır',
        removeTitle: 'Seçilmiş dosyaları kaldırın',
        cancelLabel: 'İptal',
        cancelTitle: 'Devam eden yüklemeyi iptal et',
        pauseLabel: 'Durdur',
        pauseTitle: 'Devam eden yüklemeyi duraklat ',
        uploadLabel: 'Yükle',
        uploadTitle: 'Seçilmiş dosyaları yükle ',
        msgNo: 'Hayır',
        msgNoFilesSelected: 'Hiçbir dosya seçilmedi',
        msgPaused: 'Durduruldu',
        msgCancelled: 'İptal Edildi',
        msgPlaceholder: 'Seçilen {files} ...',
        msgZoomModalHeading: 'Ayrıntılı Önizleme',
        msgFileRequired: 'Yüklemek için bir dosya seçmelisiniz.',
        msgSizeTooSmall: "'{Name}' dosyası (<b> {size} KB </b>) çok küçük ve <b> {minSize} KB </b> 'den büyük olmalıdır.'",
        msgSizeTooLarge: "'{Name}' dosyası (<b> {size} KB </b>) izin verilen maksimum yükleme boyutunu (<b> {maxSize} KB </b>) aşıyor.",
        msgFilesTooLess: 'Yüklemek için en az <b> {n} </b> {dosya} seçmelisiniz.',
        msgFilesTooMany: "Yükleme için seçilen dosyaların sayısı <b> ({n}) </b>, izin verilen maksimum sınır olan <b> {m} </b>'yi aşıyor.",
        msgTotalFilesTooMany: 'Maksimum <b> {m} </b> dosya yükleyebilirsiniz (<b> {n} </b> dosya algılandı).',
        msgFileNotFound: '"{Name}" dosyası bulunamadı!',
        msgFileSecured: 'Güvenlik kısıtlamaları "{name}" dosyasının okunmasını engelliyor.',
        msgFileNotReadable: '"{Name}" dosyası okunamıyor.',
        msgFilePreviewAborted: '"{Name}" için dosya önizlemesi iptal edildi.',
        msgFilePreviewError: '"{Name}" dosyası okunurken bir hata oluştu.',
        msgInvalidFileName: '"{Name}" dosya adında geçersiz veya desteklenmeyen karakterler.',
        msgInvalidFileType: '"{Name}" dosyası için geçersiz tür. Yalnızca "{types}" dosyaları desteklenir.',
        msgInvalidFileExtension: '"{Name}" dosyası için geçersiz uzantı. Yalnızca "{extensions}" dosyaları desteklenir.',
        msgFileTypes: {
            'image': 'resim',
            'html': 'HTML',
            'text': 'yazı',
            'video': 'video',
            'audio': 'ses',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'Dosya yükleme iptal edildi',
        msgUploadThreshold: 'İşlem sürüyor &hellip;',
        msgUploadBegin: 'Başlatılıyor &hellip;',
        msgUploadEnd: 'Tamamlandı',
        msgUploadResume: 'Devam eden yükleme &hellip;',
        msgUploadEmpty: 'Yükleme için geçerli veri yok.',
        msgUploadError: 'Yükleme Hatası',
        msgDeleteError: 'Hatayı Sil',
        msgProgressError: 'Hata',
        msgValidationError: 'Doğrulama hatası',
        msgLoading: '{File} dosyadan {index} dosyası yükleniyor &hellip;',
        msgProgress: '{File} dosyasından {index} dosyası yükleniyor - {name} -% {percent} tamamlandı.',
        msgSelected: '{n} {files} selected',
        msgFoldersNotAllowed: 'Yalnızca dosyaları sürükleyip bırakın! Bırakılan {n} klasör atlandı.',
        msgImageWidthSmall: '"{Name}" resim dosyasının genişliği en az {size} piksel olmalıdır.',
        msgImageHeightSmall: '"{Name}" resim dosyasının yüksekliği en az {size} piksel olmalıdır.',
        msgImageWidthLarge: '"{Name}" resim dosyasının genişliği {size} pikselden fazla olamaz.',
        msgImageHeightLarge: '"{Name}" resim dosyasının yüksekliği {size} pikselden fazla olamaz.',
        msgImageResizeError: 'Yeniden boyutlandırılacak görsel boyutları alınamadı.',
        msgImageResizeException: 'Görüntü yeniden boyutlandırılırken hata oluştu. <pre> {errors} </pre>',
        msgAjaxError: '{Operation} işlemiyle ilgili bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz!',
        msgAjaxProgressError: '{operation} başarısız',
        msgDuplicateFile: 'Aynı "{size} KB" boyutundaki "{name}" dosyası daha önce seçilmişti. Yinelenen seçim atlanıyor.',
        msgResumableUploadRetriesExceeded: '<b> {file} </b> dosyası için <b> {max} </b> yeniden denemenin ötesinde yükleme iptal edildi! Hata Ayrıntıları: <pre> {error} </pre>',
        msgPendingTime: 'kalan {time}',
        msgCalculatingTime: 'kalan sürenin hesaplanması',
        ajaxOperations: {
            deleteThumb: 'dosya silme',
            uploadThumb: 'dosya yükleme',
            uploadBatch: 'toplu dosya yükleme',
            uploadExtra: 'form verisi yükleme'
        },
        dropZoneTitle: 'Dosyaları buraya sürükleyip bırakın &hellip;',
        dropZoneClickTitle: '<br> (veya {files} seçmek için tıklayın)',
        fileActionSettings: {
            removeTitle: 'Dosyayı kaldır',
            uploadTitle: 'Dosya yükleme',
            uploadRetryTitle: 'Yüklemeyi yeniden dene',
            downloadTitle: 'Dosyayı indir',
            zoomTitle: 'Detayları göster',
            dragTitle: 'Taşı / Yeniden Düzenle',
            indicatorNewTitle: 'Daha yüklenmedi',
            indicatorSuccessTitle: 'Yüklendi',
            indicatorErrorTitle: 'Yükleme Hatası',
            indicatorPausedTitle: 'Yükleme Duraklatıldı',
            indicatorLoadingTitle: 'Yükleniyor &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Önceki dosyayı görüntüleyin',
            next: 'Sonraki dosyayı görüntüle',
            toggleheader: 'Başlığı değiştir',
            fullscreen: 'Tam ekrana geç',
            borderless: 'Kenarlıksız modu değiştir',
            close: 'Ayrıntılı önizlemeyi kapat'
        }
    };
})(window.jQuery);