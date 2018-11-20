--
-- Estructure of the table `data__TalkToUsOnWhatsApp_JDeS`
--

CREATE TABLE IF NOT EXISTS `clients__TalkToUsOnWhatsApp_JDeS` (
  `id`       int(11) NOT NULL AUTO_INCREMENT,
  `name`     varchar(50) NOT NULL,
  `token`    varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `phone`    varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email`    varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `message`  varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `config`   int(10) NOT NULL,
  `date`     datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


INSERT INTO `clients__TalkToUsOnWhatsApp_JDeS` (`id`, `name`, `token`, `phone`, `email`, `message`, `config`, `date`) VALUES
(1, 'Test', '0cbc6611f5540bd0809a388dc95a615b', '(61) 00000-0000', 'jandeilson.desousa@gmail.com', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, '2018-12-25 00:00:00');
COMMIT;