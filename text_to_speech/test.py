# from gtts import gTTS

# lines = [
#     "Hello there.",
#     "This is a multi-line example.",
#     "Thanks for listening!"
# ]

# tts = gTTS("\n".join(lines), lang='en')
# tts.save("example5.mp3")


from gtts import gTTS


tss=gTTS("\n".join(line),lang='en')
tss.save("exp.mp3")