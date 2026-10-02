#!/bin/bash

# --- KILL PROCESSES ---
echo "[ACTION] Mematikan semua instance Thorium sebelum beralih profil..."
pkill -15 -f "thorium" 2>/dev/null
sleep 1
pkill -9 -f "thorium" 2>/dev/null
sleep 1

# Bersihkan SingletonLock agar tidak muncul pesan "Restore pages"
echo "[INFO] Membersihkan semua file pengunci (SingletonLock)..."
find "/media/veracrypt1/DATA LAMA" -name "Singleton*" -exec rm -f {} +

BASE_DIR="/media/veracrypt1/R LAMA/Profile_Master"

STATE_FILE="/media/veracrypt1/R LAMA/.active_profile"

TELEGRAM_TOKEN="8841941027:AAGt1LTI8GCVAOb2EAQzaQTP33n-qJTrFa4"
TELEGRAM_CHAT_ID="-1002717306025"

CURRENT=$(cat "$STATE_FILE" 2>/dev/null || echo "1")
UA1="Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
UA2="Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
UA3="Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
UA4="Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
UA5="Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
declare -A OVERRIDES

if [ "$CURRENT" = "1" ]; then
	NEXT="2"
	SUFFIX="_2"
	UA="$UA2"
	EXT_VAL="Profile2"

elif [ "$CURRENT" = "2" ]; then
	NEXT="3"
	SUFFIX="_3"
	UA="$UA2"
	EXT_VAL="Profile3"
else
	# Jika $CURRENT adalah 3 (atau lainnya), kembali memutar ke Profile 1
	NEXT="1"
	SUFFIX=""
	UA="$UA1"
	EXT_VAL="Profile1"

	# Override khusus saat pindah ke Profile 1
	#OVERRIDES["Malboro"]="_2"
fi
# Kadut = Bejo, Cuan = Zulf, Curut = Curut, Jago = Mencong, Jul = Bosque, Manyut = Manyut, Ninja = Manuk, Penyok = Yatim, Slamet = suka2 , Telkomsel = Malboro
echo "Mengalihkan Profile dari $CURRENT ke $NEXT..."

for file in "$BASE_DIR/MasterChrome.sh"; do
	if [ -f "$file" ]; then
		# Update array PROFIL_NAMES secara dinamis
		NEW_PROFILES="PROFIL_NAMES=("
		for name in "Mencong" "Kadut" "Curut" "Zulf"; do
			if [[ -v OVERRIDES[$name] ]]; then
				# Jika key terdaftar di OVERRIDES (bahkan jika nilainya kosong ""), gunakan suffix khusus
				NEW_PROFILES+="\"${name}${OVERRIDES[$name]}\" "
			else
				# Jika tidak ada di OVERRIDES, ikuti suffix global saat ini ($SUFFIX)
				NEW_PROFILES+="\"${name}${SUFFIX}\" "
			fi
		done
		# Menghapus spasi ekstra di akhir sebelum menutup array
		NEW_PROFILES="${NEW_PROFILES% })"

		# Konfigurasi EXT_4 sudah ditangani secara dinamis di dalam MasterChrome.sh
		# OPTIMASI: Gabungkan 2 perintah sed menjadi 1 eksekusi untuk menghemat waktu pemrosesan I/O agar sangat cepat (< 5ms)
		sed -i -e "s|^PROFIL_NAMES=(.*|${NEW_PROFILES}|" -e "s|^\([[:space:]]*\)\"--user-agent=[^\"]*\"|\1\"--user-agent=$UA\"|" "$file"

		echo "[OK] $file telah diupdate."
	else
		MSG_ERROR="❌ Switch Profile Gagal!
File tidak ditemukan: $file"

		curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_TOKEN/sendMessage" \
			--data-urlencode "chat_id=$TELEGRAM_CHAT_ID" \
			--data-urlencode "text=$MSG_ERROR" >/dev/null

		notify-send -u critical "Switch Profile Gagal" "File tidak ditemukan:\n$file"
		exit 1
	fi
done

echo "$NEXT" >"$STATE_FILE"
echo "Berhasil! Sekarang menggunakan Profile $NEXT (Suffix: '$SUFFIX')."
notify-send "Sekarang menggunakan Profile $EXT_VAL"

MSG_SUCCESS="✅ Switch Profile Berhasil!
Profile $NEXT"

curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_TOKEN/sendMessage" \
	--data-urlencode "chat_id=$TELEGRAM_CHAT_ID" \
	--data-urlencode "text=$MSG_SUCCESS" >/dev/null
