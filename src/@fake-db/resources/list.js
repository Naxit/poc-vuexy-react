import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  agents: [
        {
            "contract_id": 7,
            "code": "150",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "11.50",
            "delta_contract": "-140.17",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-10-08 00:00:00",
            "datetime_end": null,
            "id": 7,
            "firstname": "Richelain",
            "lastname": "ALAMELLE",
            "national_insurance_number": "1 85 11 97 411 645 58",
            "sex": 1,
            "date_birth": "1985-03-26 00:00:00",
            "address": "28 rue Andy",
            "address_complement": null,
            "postcode": "97422",
            "city": "La Saline",
            "longitude": "55.2659954000",
            "latitude": "-21.0754497000",
            "email": "richelin@orange.fr",
            "phone_office": "692115696",
            "phone_mobile": "",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Richelain ALAMELLE",
            "fullName": "ALAMELLE Richelain",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 6,
            "code": "100",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2019-04-18 00:00:00",
            "datetime_end": null,
            "id": 6,
            "firstname": "Ibrahim",
            "lastname": "ALI-SAID",
            "national_insurance_number": "1 79 02 97 411 313 55",
            "sex": 1,
            "date_birth": "1979-02-14 00:00:00",
            "address": "11 Rue Saint-jaques Apt A 04",
            "address_complement": null,
            "postcode": "97400",
            "city": "Saint Denis",
            "longitude": "55.4590386000",
            "latitude": "-20.8834234000",
            "email": "ibradilhno@gmail.com",
            "phone_office": "",
            "phone_mobile": "0693 60 67 73",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Ibrahim ALI-SAID",
            "fullName": "ALI-SAID Ibrahim",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 53,
            "code": "2",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "12.00",
            "delta_contract": "-139.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-01-01 00:00:00",
            "datetime_end": null,
            "id": 53,
            "firstname": "Jean Florent",
            "lastname": "ANAMALE",
            "national_insurance_number": "1 81 07 97 416 203 94",
            "sex": 1,
            "date_birth": "1981-07-25 00:00:00",
            "address": "6 Rue du commandant Cousteau",
            "address_complement": null,
            "postcode": "97436",
            "city": "Saint -Leu",
            "longitude": "-0.5490441000",
            "latitude": "44.8506908000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Jean Florent ANAMALE",
            "fullName": "ANAMALE Jean Florent",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 61,
            "code": "222",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "149.50",
            "delta_contract": "-2.17",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2019-09-24 00:00:00",
            "datetime_end": null,
            "id": 61,
            "firstname": "Anthony",
            "lastname": "AYASSAMI-AYAMAN",
            "national_insurance_number": "1 81 05 97 411 555 54",
            "sex": 1,
            "date_birth": "1981-05-26 00:00:00",
            "address": "26 Route des goyaviers",
            "address_complement": null,
            "postcode": "97417",
            "city": "La Montagne",
            "longitude": "55.4139206000",
            "latitude": "-20.9103813000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0693 93 26 05",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Anthony AYASSAMI-AYAMAN",
            "fullName": "AYASSAMI-AYAMAN Anthony",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 77,
            "code": "271",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "42.00",
            "delta_contract": "-109.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-03-01 00:00:00",
            "datetime_end": null,
            "id": 77,
            "firstname": "Romuald Jean Arnaud",
            "lastname": "BLAIN",
            "national_insurance_number": "",
            "sex": 1,
            "date_birth": "2000-05-17 00:00:00",
            "address": "28 Lotissement le verger",
            "address_complement": null,
            "postcode": "97440",
            "city": "Saint-André",
            "longitude": "55.6838857000",
            "latitude": "-20.9965914000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692 74 85 52",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Romuald Jean Arnaud BLAIN",
            "fullName": "BLAIN Romuald Jean Arnaud",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 30,
            "code": "133",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-01-01 00:00:00",
            "datetime_end": null,
            "id": 30,
            "firstname": "Tony Steeve",
            "lastname": "CHAROLAIS",
            "national_insurance_number": "1 82 06 97 411 415 64",
            "sex": 1,
            "date_birth": "1982-06-17 00:00:00",
            "address": "59 Rue du Père Lafosse",
            "address_complement": null,
            "postcode": "97490",
            "city": "Sainte-Clotilde",
            "longitude": "55.4904173000",
            "latitude": "-20.8995573000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692 89 77 63",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Tony Steeve CHAROLAIS",
            "fullName": "CHAROLAIS Tony Steeve",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 28,
            "code": "127",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "195.50",
            "delta_contract": "43.83",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2020-10-12 00:00:00",
            "datetime_end": null,
            "id": 28,
            "firstname": "Loraine",
            "lastname": "DALAYA SERABAYA",
            "national_insurance_number": "2 99 05 97 410 899 59",
            "sex": 2,
            "date_birth": "1999-05-22 00:00:00",
            "address": "19 rue des Corbeilles d'Or,",
            "address_complement": null,
            "postcode": "97412",
            "city": "Bras Panon",
            "longitude": "55.6906976000",
            "latitude": "-20.9999670000",
            "email": "sarabayadalayaloraine@gmail.com",
            "phone_office": "",
            "phone_mobile": "0693 82 27 11",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Loraine DALAYA SERABAYA",
            "fullName": "DALAYA SERABAYA Loraine",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 66,
            "code": "239",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "11.75",
            "delta_contract": "-139.92",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2020-06-22 00:00:00",
            "datetime_end": null,
            "id": 66,
            "firstname": "Thierry",
            "lastname": "DEMANESSE",
            "national_insurance_number": "1 76 09 93 053 079 47",
            "sex": 1,
            "date_birth": "1976-09-29 00:00:00",
            "address": "3 Rue Marcel Pagnol Auble clair",
            "address_complement": null,
            "postcode": "97438",
            "city": "Sainte-Marie",
            "longitude": "0.6419252000",
            "latitude": "44.2326644000",
            "email": "thierrydemanesse974@gmail.com",
            "phone_office": "",
            "phone_mobile": "0693 10 12 22",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Thierry DEMANESSE",
            "fullName": "DEMANESSE Thierry",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 42,
            "code": "155",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "195.50",
            "delta_contract": "43.83",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-05-01 00:00:00",
            "datetime_end": null,
            "id": 42,
            "firstname": "Sébastien Jacques",
            "lastname": "DIFFERNAND",
            "national_insurance_number": "1 85 06 97 411 557 66",
            "sex": 1,
            "date_birth": "1985-06-21 00:00:00",
            "address": "29 Rue Méziaires Guignard",
            "address_complement": null,
            "postcode": "97490",
            "city": "Sainte-Clotilde",
            "longitude": "55.4816351000",
            "latitude": "-20.8949323000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692  10 63 70",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Sébastien Jacques DIFFERNAND",
            "fullName": "DIFFERNAND Sébastien Jacques",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 1,
            "code": "JDOE",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "88.00",
            "delta_contract": "-63.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-01-01 00:00:00",
            "datetime_end": null,
            "id": 1,
            "firstname": "John",
            "lastname": "DOE",
            "national_insurance_number": "",
            "sex": 1,
            "date_birth": "1986-08-06 00:00:00",
            "address": "1, rue Terre Neuve",
            "address_complement": null,
            "postcode": "91940",
            "city": "ULIS",
            "longitude": null,
            "latitude": null,
            "email": "john.doe@email.fr",
            "phone_office": "04 78 90 41 89",
            "phone_mobile": "06 28 88 24 91",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "John DOE",
            "fullName": "DOE John",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 2,
            "code": "MARTMYSTERE",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "136.00",
            "delta_contract": "-15.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-01-01 00:00:00",
            "datetime_end": null,
            "id": 2,
            "firstname": "Martin",
            "lastname": "DUBOIS",
            "national_insurance_number": "186086938803973",
            "sex": 1,
            "date_birth": "1986-08-06 00:00:00",
            "address": "115 Rue Saint-Lazare",
            "address_complement": null,
            "postcode": "75008",
            "city": "PARIS",
            "longitude": "2.3258991000",
            "latitude": "48.8753102000",
            "email": "martin.dubois@gmail.com",
            "phone_office": "04 78 90 41 89",
            "phone_mobile": "0628802591",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Martin DUBOIS",
            "fullName": "DUBOIS Martin",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 4,
            "code": "67",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "188.00",
            "delta_contract": "36.33",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-01-01 00:00:00",
            "datetime_end": null,
            "id": 4,
            "firstname": "Abdouroihamane",
            "lastname": "HAYIRIDINE",
            "national_insurance_number": "1 88 12 99 397 023 42",
            "sex": 1,
            "date_birth": "1988-12-26 00:00:00",
            "address": "Appt 46 SIDR Alsace Entrée 16,",
            "address_complement": null,
            "postcode": "97400",
            "city": "Saint Denis",
            "longitude": "7.4416241000",
            "latitude": "48.3181795000",
            "email": "haiiyiridine@gmail.com",
            "phone_office": "",
            "phone_mobile": "0693 42 14 86",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Abdouroihamane HAYIRIDINE",
            "fullName": "HAYIRIDINE Abdouroihamane",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 36,
            "code": "139",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "195.50",
            "delta_contract": "43.83",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-01-01 00:00:00",
            "datetime_end": null,
            "id": 36,
            "firstname": "Ambroise",
            "lastname": "KGRAIN",
            "national_insurance_number": "1 56 12 97 412 019 54",
            "sex": 1,
            "date_birth": "1956-12-07 00:00:00",
            "address": "2 Rue des conflors",
            "address_complement": null,
            "postcode": "97490",
            "city": "Saint-Denis",
            "longitude": "55.5025582000",
            "latitude": "-20.8985859000",
            "email": "",
            "phone_office": "01 02 03 04 05",
            "phone_mobile": "0693 83 15 85",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Ambroise KGRAIN",
            "fullName": "KGRAIN Ambroise",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 84,
            "code": "44",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "138.00",
            "delta_contract": "-13.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2013-02-22 00:00:00",
            "datetime_end": null,
            "id": 84,
            "firstname": "Sébastien",
            "lastname": "LEBON",
            "national_insurance_number": "1 85 03 97 416 423 02",
            "sex": 1,
            "date_birth": "1985-03-27 00:00:00",
            "address": "11 avenue du docteur Raymond verges",
            "address_complement": null,
            "postcode": "97450",
            "city": "Saint-Louis",
            "longitude": "55.4637056000",
            "latitude": "-21.3357608000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0693 44 85 03",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Sébastien LEBON",
            "fullName": "LEBON Sébastien",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 67,
            "code": "24",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2011-11-01 00:00:00",
            "datetime_end": null,
            "id": 67,
            "firstname": "Loic",
            "lastname": "MAILLOT",
            "national_insurance_number": "1 90 12 97 411 285 92",
            "sex": 1,
            "date_birth": "1990-12-11 00:00:00",
            "address": "2 Impasse St Jean Confiance les Hauts",
            "address_complement": null,
            "postcode": "97438",
            "city": "Saint-Marie",
            "longitude": "55.5242603000",
            "latitude": "-20.9470679000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692 15 71 98",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Loic MAILLOT",
            "fullName": "MAILLOT Loic",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 16,
            "code": "118",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "126.50",
            "delta_contract": "-25.17",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2017-07-01 00:00:00",
            "datetime_end": null,
            "id": 16,
            "firstname": "Kévin Richard",
            "lastname": "MARIAMAL",
            "national_insurance_number": "1 90 09 97 410 085 80",
            "sex": 1,
            "date_birth": "1990-09-24 00:00:00",
            "address": "95 B Chemin Bras Petard",
            "address_complement": null,
            "postcode": "97412",
            "city": "Bras Panon",
            "longitude": "55.6638085000",
            "latitude": "-20.9991888000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0693 64 18 96",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Kévin Richard MARIAMAL",
            "fullName": "MARIAMAL Kévin Richard",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 82,
            "code": "37",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "103.50",
            "delta_contract": "-48.17",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2013-01-01 00:00:00",
            "datetime_end": null,
            "id": 82,
            "firstname": "Dominique",
            "lastname": "PITOU",
            "national_insurance_number": "1 87 03 97 411 567 07",
            "sex": 1,
            "date_birth": "1987-04-04 00:00:00",
            "address": "91 chemin des acajous",
            "address_complement": null,
            "postcode": "97490",
            "city": "Sainte-Clotilde",
            "longitude": "55.4757179000",
            "latitude": "-20.9033527000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692 51 73 49",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Dominique PITOU",
            "fullName": "PITOU Dominique",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 49,
            "code": "190",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-11-18 00:00:00",
            "datetime_end": null,
            "id": 49,
            "firstname": "Andhuimou",
            "lastname": "SAID",
            "national_insurance_number": "1 77 11 98 508 008 90",
            "sex": 1,
            "date_birth": "1977-11-17 00:00:00",
            "address": "170 avenue du beau pays",
            "address_complement": null,
            "postcode": "97438",
            "city": "Sainte-Marie",
            "longitude": "55.5286044000",
            "latitude": "-20.9215584000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692 81 22 03",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Andhuimou SAID",
            "fullName": "SAID Andhuimou",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 97,
            "code": "****",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-05-01 00:00:00",
            "datetime_end": null,
            "id": 97,
            "firstname": "Georgette Ii",
            "lastname": "SAUTRON",
            "national_insurance_number": "1 97 04 97 811 077 51",
            "sex": 1,
            "date_birth": "1997-04-03 00:00:00",
            "address": "35dezdzedzedze edzed ze dze",
            "address_complement": null,
            "postcode": "33443",
            "city": "Sainte ClotiDEZDEZlde",
            "longitude": null,
            "latitude": null,
            "email": "sautrongeorgio@gmail.com",
            "phone_office": "",
            "phone_mobile": "0638 50 27 80",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Georgette Ii SAUTRON",
            "fullName": "SAUTRON Georgette Ii",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 98,
            "code": "****CX",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-05-02 00:00:00",
            "datetime_end": null,
            "id": 97,
            "firstname": "Georgette Ii",
            "lastname": "SAUTRON",
            "national_insurance_number": "1 97 04 97 811 077 51",
            "sex": 1,
            "date_birth": "1997-04-03 00:00:00",
            "address": "35dezdzedzedze edzed ze dze",
            "address_complement": null,
            "postcode": "33443",
            "city": "Sainte ClotiDEZDEZlde",
            "longitude": null,
            "latitude": null,
            "email": "sautrongeorgio@gmail.com",
            "phone_office": "",
            "phone_mobile": "0638 50 27 80",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Georgette Ii SAUTRON",
            "fullName": "SAUTRON Georgette Ii",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 97,
            "code": "****",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-05-01 00:00:00",
            "datetime_end": null,
            "id": 97,
            "firstname": "Georgette Ii",
            "lastname": "SAUTRON",
            "national_insurance_number": "1 97 04 97 811 077 51",
            "sex": 1,
            "date_birth": "1997-04-03 00:00:00",
            "address": "35dezdzedzedze edzed ze dze",
            "address_complement": null,
            "postcode": "33443",
            "city": "Sainte ClotiDEZDEZlde",
            "longitude": null,
            "latitude": null,
            "email": "sautrongeorgio@gmail.com",
            "phone_office": "",
            "phone_mobile": "0638 50 27 80",
            "created_at": null,
            "updated_at": null,
            "company_id": 3,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Georgette Ii SAUTRON",
            "fullName": "SAUTRON Georgette Ii",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 98,
            "code": "****CX",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "0.00",
            "delta_contract": "-151.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2021-05-02 00:00:00",
            "datetime_end": null,
            "id": 97,
            "firstname": "Georgette Ii",
            "lastname": "SAUTRON",
            "national_insurance_number": "1 97 04 97 811 077 51",
            "sex": 1,
            "date_birth": "1997-04-03 00:00:00",
            "address": "35dezdzedzedze edzed ze dze",
            "address_complement": null,
            "postcode": "33443",
            "city": "Sainte ClotiDEZDEZlde",
            "longitude": null,
            "latitude": null,
            "email": "sautrongeorgio@gmail.com",
            "phone_office": "",
            "phone_mobile": "0638 50 27 80",
            "created_at": null,
            "updated_at": null,
            "company_id": 3,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Georgette Ii SAUTRON",
            "fullName": "SAUTRON Georgette Ii",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 15,
            "code": "117",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "47.00",
            "delta_contract": "-104.67",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2017-07-01 00:00:00",
            "datetime_end": null,
            "id": 15,
            "firstname": "Bruno",
            "lastname": "TECHER",
            "national_insurance_number": "1 64 11 97 410 009 20",
            "sex": 1,
            "date_birth": "1964-11-11 00:00:00",
            "address": "2 cité debalman",
            "address_complement": null,
            "postcode": "97437",
            "city": "Sainte-Anne",
            "longitude": "55.7340494000",
            "latitude": "-21.0938526000",
            "email": "",
            "phone_office": "",
            "phone_mobile": "0692 18 55 99",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Bruno TECHER",
            "fullName": "TECHER Bruno",
            "avatar": require('@src/assets/images/avatars/9.png').default
        },
        {
            "contract_id": 48,
            "code": "184",
            "counters_month": 202110,
            "hours_total": "151.67",
            "hours_busy_deducted": "0.00",
            "hours_worked_payable": "34.50",
            "delta_contract": "-117.17",
            "hours_busy_payable": "0.00",
            "type": 0,
            "datetime_start": "2018-09-15 00:00:00",
            "datetime_end": null,
            "id": 48,
            "firstname": "Vassoudeva",
            "lastname": "TENDRAYEN",
            "national_insurance_number": "1 85 12 97 411 771 45",
            "sex": 1,
            "date_birth": "1985-12-29 00:00:00",
            "address": "220 chemin Valentin",
            "address_complement": null,
            "postcode": "97440",
            "city": "Saint André",
            "longitude": "55.6725023000",
            "latitude": "-20.9549880000",
            "email": "tvassoudeva17@gmail.com",
            "phone_office": "",
            "phone_mobile": "0692 79 31 36",
            "created_at": null,
            "updated_at": null,
            "company_id": 1,
            "rights_sectors_resource_user_id": 1,
            "sector_resource_id": 1,
            "rights_company_user_id": 1,
            "fullname": "Vassoudeva TENDRAYEN",
            "fullName": "TENDRAYEN Vassoudeva",
            "avatar": require('@src/assets/images/avatars/9.png').default
        }
    ]
}

// GET ALL DATA
mock.onGet('/api/resources/list/all-agents').reply(200, data.agents)

// POST: Add new user
mock.onPost('/apps/resources/add-agent').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)

  const { length } = data.agents
  let lastIndex = 0
  if (length) {
    lastIndex = data.agents[length - 1].id
  }
  user.id = lastIndex + 1

  data.agents.unshift(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/resources/agent/data').reply(config => {
  const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.agents.filter(
    user =>
      (user.fullName.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) //&&
      // user.role === (role || user.role) &&
      // user.currentPlan === (currentPlan || user.currentPlan) &&
      // user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      agents: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET USER
mock.onGet('/api/resources/agent').reply(config => {
  const { id } = config
  const user = data.agents.find(i => i.id === id)
  return [200, { user }]
})

// DELETE: Deletes User
mock.onDelete('/api/resources/agent/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.agents.findIndex(t => t.id === userId)
  data.agents.splice(userIndex, 1)

  return [200]
})
